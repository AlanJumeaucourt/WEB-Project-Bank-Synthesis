import React, { Component } from "react";
import {
  BasicLineChart,
  StackedAreaChart,
  SmoothedLineChart,
  SmoothedAreaChart,
  BasicAreaChart,
} from "../components/charts/Lines";
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
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.getSoldePeriode()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const prepareChartData = () => {
    // Traitez les données pour les préparer au format du graphique
    // Assurez-vous d'adapter ces étapes en fonction de la structure des données retournées par l'API
    const xData = Object.keys(data);
    const yData = Object.values(data);

    return { xData, yData };
  };

  const { xData, yData } = prepareChartData();

  return (
    <div>
      <h1>TCArgent Patrimoine</h1>
      <p className="p-3">
        Voici votre page resumant votre patrimoine au fil du temps
      </p>
      <Card>
        <div class="row">
          <div class="d-flex flex-row"></div>
          <div class="col-sm-3">
            <Card title="Patrimoine Total">
              <p class="card-text">1</p>
            </Card>
          </div>
          <div class="col-sm-3">
            <Card title="Prévisions : 1 mois">
              <p class="card-text">2</p>
            </Card>
          </div>
          <div class="col-sm-3">
            <Card title="Prévisions : 6 mois">
              <p class="card-text">3</p>
            </Card>
          </div>
          <div class="col-sm-3">
            <Card title="Prévisions : 12 mois">
              <p class="card-text">4</p>
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
          names={["legende1", "legende2", "legende3", "legende4"]}
          yDatas={[
            [10, 20, 30, 10, 0],
            [100, 10, 30, 15, 22],
            [10, 50, 30, 60, 40],
            [11, 3, 10, 5, 40],
          ]}
          areaStyles={true}
          smooths={true}
        />
      </div>

      <div style={{ height: "500px", width: "100%" }}>
        Affichage d'un compte courant :
        <Grid container spacing={1}>
          <Grid xs={12} md={10}>
            <h2>Mon jolie graphique</h2>
            <BasicLineChart
              title="Titre"
              xData={xData}
              name="legende"
              yData={yData}
              color="red"
            />
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
                <div className="p-2">
                  <RoundedButton style={{ width: "100%" }}>
                    item 1
                  </RoundedButton>
                </div>
                <div className="p-2">
                  <RoundedButton style={{ width: "100%" }}>
                    item 2
                  </RoundedButton>
                </div>
                <div className="p-2">
                  <RoundedButton style={{ width: "100%" }}>
                    item 3
                  </RoundedButton>
                </div>
                <div className="p-2">
                  <RoundedButton style={{ width: "100%" }}>
                    item 4
                  </RoundedButton>
                </div>
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
                      color={"light"}
                      style={{ padding: "5%", margin: "5px", height: "75%" }}
                    >
                      Line
                    </RoundedButton>
                  </Grid>
                  <Grid xs={6} md={6}>
                    <RoundedButton
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
