import React, { Component } from "react";
import {
  BasicLineChart,
  StackedAreaChart,
  SmoothedLineChart,
  SmoothedAreaChart,
  BasicAreaChart,
} from "../components/charts/Lines";
import { TreeMap } from "../components/charts/TreeMap";
import { useEffect, useState } from "react";
import { Card, Stack } from "../components/ui_components/Containers";
import { Queue } from "../components/ui_components/Containers";
import {
  ButtonPrimary,
  CircularButton,
  RoundedButton,
} from "../components/ui_components/Buttons";
import { Axios } from "../services/Axios";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";

const Patrimoine = () => {
  const [chartType, setChartType] = useState("line"); // 'line' par défaut
  const [data, setData] = useState([]);
  const [dataListeCompte, setDataListeCompte] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);

  const handleChartTypeArea = () => {
    setChartType("area");
  };

  const handleChartTypeLine = () => {
    setChartType("line");
  };

  useEffect(() => {
    Axios.getListeComptes()
      .then((response) => {
        setDataListeCompte(response);
        if (!selectedAccount && dataListeCompte.length > 0) {
          // Si aucun compte n'est sélectionné, sélectionnez le premier compte par défaut
          console.log(dataListeCompte);
          setSelectedAccount(dataListeCompte[0].id);
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
          // Remettez les données du graphique à null ou une valeur par défaut en cas d'erreur
          setData(null);
        });
    }

  }, [selectedAccount]);


  const prepareChartData = () => {
    // Traitez les données pour les préparer au format du graphique
    // Assurez-vous d'adapter ces étapes en fonction de la structure des données retournées par l'API
    if (data) {
      const xData = Object.keys(data);
      const yData = Object.values(data);

      return { xData, yData };
    }

    return { xData: [], yData: [] };
  };

  const { xData, yData } = prepareChartData();

  const handleAccountButtonClick = (accountId) => {
    setSelectedAccount(accountId);
  };

  useEffect(() => {
    Axios.getListeComptes()
      .then((response) => {
        setDataListeCompte(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const CardData = ({ number }) => {
    const n = parseInt(number);
    return (
      <div className="card">
        <h2 className={"text-" + (n > 0 ? "success" : "danger")}>{number}</h2>
      </div>
    );
  };



  return (
    <div style={{ padding: "10px 50px 20px" }}>

      <Card title="Page Patrimoine">
        <p className="p-3">
          Voici la page résumant votre patrimoine au fil du temps
        </p>
      </Card>
      <Card style={{ backgroundColor: 'lightblue' }}>
        <div class="row">
          <div class="d-flex flex-row"></div>
          <div class="col-sm-3">
            <Card title="Patrimoine Total ">
              <CardData number={42000} />
            </Card>
          </div>
          <div class="col-sm-3">
            <Card title="Prévisions : 1 mois">
              <CardData number={420} />
            </Card>
          </div>
          <div class="col-sm-3">
            <Card title="Prévisions : 6 mois">
              <CardData number={-1000} />
            </Card>
          </div>
          <div class="col-sm-3">
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
        Affichage d'un compte courant :
        <Grid container spacing={1} style={{ height: "100%", minHeight: "500px" }}>
          <Grid xs={12} md={10}>
            <h2>Historique du compte</h2>
            {chartType === "line" ? (
              <SmoothedLineChart
                title="Titre"
                xData={xData}
                name="legende"
                yData={yData}
                color="red"
              />
            ) : (
              <SmoothedAreaChart
                title="Titre"
                xData={xData}
                name="legende"
                yData={yData}
                color="red"
              />
            )}
          </Grid>
          <Grid xs={12} md={2}>
            <Card
              title="Comptes à afficher :"
              className="p-2"
              style={{ height: "100%" }}
            >
              <p class="card-text">
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
                  <Grid xs={6} md={6}>
                    <RoundedButton
                      onClick={handleChartTypeLine}
                      color={"light"}
                      style={{ padding: "5%", margin: "5px", height: "75%" }}
                    >
                      Line
                    </RoundedButton>
                  </Grid>
                  <Grid xs={6} md={6}>
                    <RoundedButton
                      onClick={handleChartTypeArea}
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

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  border: "1px solid",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  padding: theme.spacing(1),
  borderRadius: "4px",
  textAlign: "center",
}));

export { Patrimoine };
