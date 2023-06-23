import React from "react";
import {
  StackedAreaChart, SmoothedLineChart, SmoothedAreaChart
} from "../components/charts/Lines";
import {
  StackedBarChart, SmoothedBaChart, SmoothedBarChart
} from "../components/charts/Bar";
import { TreeMap } from "../components/charts/TreeMap";
import { useEffect, useState } from "react";
import { Card, Stack } from "../components/ui_components/Containers";
import { RoundedButton } from "../components/ui_components/Buttons";
import { Axios } from "../services/Axios";
import Grid from "@mui/system/Unstable_Grid";

export const Patrimoine = () => {
  const [chartType, setChartType] = useState("line"); // 'line' par défaut
  const [data, setData] = useState([]);
  const [dataListeCompte, setDataListeCompte] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);

  useEffect(() => {
    Axios.getListeComptes()
      .then((response) => {
        setDataListeCompte(response);
        console.log('data:', response); // Utiliser la nouvelle valeur de response
        if (!selectedAccount && response.length > 0) {
          setSelectedAccount(response[0].id);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  useEffect(() => {
    if (selectedAccount) {
      Axios.getSoldePeriode(selectedAccount)
        .then((response) => {
          console.log(response);
          setData(response);
        })
        .catch((error) => {
          console.log(error);
          setData(null);
        });
    }
  }, [selectedAccount]);
  
  


  const prepareChartData = () => {
    if (data) {
      const xData = Object.keys(data);
      const yData = Object.values(data);

      return { xData, yData };
    }

    return { xData: [], yData: [] };
  };

  const { xData, yData } = prepareChartData();

  function handleChartType(typeOfChart) {
    setChartType(typeOfChart)
  }

  const handleChartTypeLine = () => {
    setChartType("line");
  };

  const handleAccountButtonClick = (accountId) => {
    setSelectedAccount(accountId);
  };

  const CardData = ({ number }) => {
    const n = parseInt(number);
    return (
      <div className="card">
        <h2 className={"text-" + (n > 0 ? "success" : "danger")}>{number}</h2>
      </div>
    );
  };

  const AccountChart = () => {
    if (chartType === "line") {
      return (<>
        <SmoothedLineChart
          title="Solde"
          xData={xData}
          name="compte"
          yData={yData}
          color="red"
        />
      </>
      )
    } else if (chartType === "bar") {
      return (
        <SmoothedBarChart
          title="Solde"
          xData={xData}
          name="compte"
          yData={yData}
          color="red"
        />
      )
    } else if (chartType === "area") {
      return (
        <SmoothedAreaChart
          title="Solde"
          xData={xData}
          name="compte"
          yData={yData}
          color="red"
        />
      )
    }
  }

  return (
    <div style={{ padding: "10px 50px 20px" }}>
      <Card style={{ fontSize: "40px" }}>
        <p className="p-3">Page Patrimoine</p>
      </Card>
      <Card style={{ backgroundColor: 'lightblue' }}>
        <div className="row">
          <div className="d-flex flex-row"></div>
          <div className="col-sm-3">
            <Card title="Patrimoine Total ">
              <CardData number={42000} />
            </Card>
          </div>
          <div className="col-sm-3">
            <Card title="Prévisions : 1 mois">
              <CardData number={420} />
            </Card>
          </div>
          <div className="col-sm-3">
            <Card title="Prévisions : 6 mois">
              <CardData number={-1000} />
            </Card>
          </div>
          <div className="col-sm-3">
            <Card title="Prévisions : 12 mois">
              <CardData number={1800} />
            </Card>
          </div>
        </div>
      </Card>

      <div
        style={{ height: "500px", width: "100%" }}
        className="d-flex flex-row justify-content-between"
      >
        <StackedAreaChart
          title="Graph patrimoine tout compte"
          xData={["lun", "mar", "mer", "jeu", "ven"]}
          names={["LEP", "PEA", "Livret A"]}
          yDatas={[
            [10, 20, 30, 10, 0],
            [100, 10, 30, 15, 22],
            [10, 50, 30, 60, 40],
          ]}
          areaStyles={true}
          smooths={true}
        />
      </div>

      <div style={{ width: "100%" }}>
        <Grid
          container
          spacing={1}
          style={{ height: "100%", minHeight: "500px" }}
        >
          <Grid xs={12} md={10}>
            {AccountChart()}
          </Grid>
          <Grid xs={12} md={2}>
            <Card
              title="Comptes à afficher :"
              className="p-2"
              style={{ height: "100%" }}
            >
              <p className="card-text">
                Selectionner le compte à afficher sur le graphique
              </p>
              <Stack style={{ height: "inherit" }}>
                {dataListeCompte.map((compte) => (
                  <div className="p-2" key={compte.id}>
                    <RoundedButton
                      style={{ width: "100%" }}
                      onClick={() => handleAccountButtonClick(compte.id)}
                    >
                      {compte.account_name}
                    </RoundedButton>
                  </div>
                ))}
              </Stack>
              <br></br>





              <br></br>
              <div
                className="rounded p-1"
                style={{
                  position: "relative",
                  bottom: "1%",
                  background: "#D3D3D3",
                  float: "center",
                }}
              >
                Type de graphique :
                <Grid container spacing={1}>
                  <Grid xs={4} md={4}>
                    <RoundedButton
                      onClick={() => handleChartType('line')}
                      color={"light"}
                      style={{ padding: "5%", margin: "5px", height: "75%" }}
                    >
                      Line
                    </RoundedButton>
                  </Grid>
                  <Grid xs={4} md={4}>
                    <RoundedButton
                      onClick={() => handleChartType('area')}
                      color={"light"}
                      style={{ padding: "5%", margin: "5px", height: "75%" }}
                    >
                      Area
                    </RoundedButton>
                  </Grid>
                  <Grid xs={4} md={4}>
                    <RoundedButton
                      onClick={() => handleChartType('bar')}
                      color={"light"}
                      style={{ padding: "5%", margin: "5px", height: "75%" }}
                    >
                      Bar
                    </RoundedButton>
                  </Grid>
                </Grid>
              </div>
            </Card>
          </Grid>
        </Grid>
        <div style={{ height: "500px", width: "100%" }}>
          Affichage d'un compte courant :
          <Grid container spacing={1}>
            <Grid xs={12} md={10}>
              <h2>Répartition du patrimoine</h2>
              <TreeMap
                data={[1500, 2000, 1000]}
                names={["PEA", "LEP", "Livret A"]}
                titre="essai"
              />
            </Grid>
          </Grid>
        </div>
        <div className="h-100" style={{ width: "300px" }}></div>
        Fin de page
      </div>
    </div>
  );
};
