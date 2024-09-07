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
import { Typography, Box, Paper } from "@mui/material";

export const Patrimoine = () => {
  const [chartType, setChartType] = useState("line"); // 'line' par défaut
  const [data, setData] = useState([]);
  const [dataListeCompte, setDataListeCompte] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);

  useEffect(() => {
    Axios.getListeComptes()
      .then((response) => {
        setDataListeCompte(response);
        // Sélectionner automatiquement le premier compte
        if (response.length > 0) {
          setSelectedAccount(response[0].id);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    Axios.getSoldePeriode(selectedAccount)
      .then((response) => {
        console.log(response);
        setData(response);
      })
      .catch((error) => {
        console.log(error);
        setData(null);
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
    <Box sx={{ padding: "20px 50px 40px", backgroundColor: "#f5f5f5" }}>
      <Typography variant="h4" gutterBottom sx={{ marginBottom: "20px", color: "#333", textShadow: "1px 1px 2px rgba(0,0,0,0.1)" }}>
        Votre Patrimoine
      </Typography>

      <Paper elevation={3} sx={{ padding: "20px", marginBottom: "20px", borderRadius: "15px" }}>
        <Typography variant="body1">
          Voici votre page qui résume votre patrimoine au fil du temps !
        </Typography>
      </Paper>

      <Grid container spacing={3} sx={{ marginBottom: "30px" }}>
        {[
          { title: "Patrimoine Total", value: 42000 },
          { title: "Prévisions : 1 mois", value: 420 },
          { title: "Prévisions : 6 mois", value: -1000 },
          { title: "Prévisions : 12 mois", value: 1800 }
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper elevation={2} sx={{ 
              padding: "15px", 
              height: "100%", 
              borderRadius: "12px",
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
              }
            }}>
              <Typography variant="h6" gutterBottom>{item.title}</Typography>
              <Typography 
                variant="h4" 
                sx={{ 
                  color: item.value > 0 ? "green" : "red",
                  fontWeight: "bold"
                }}
              >
                {item.value} €
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

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
              style={{ height: "100%", borderRadius: "15px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
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
    </Box>
  );
};
