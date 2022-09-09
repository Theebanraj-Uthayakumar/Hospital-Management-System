import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 400,
  },
});
const TechnologyCard = ({ t }) => {
  const classes = useStyles();
  return (
    <div className="card mb-3 melri_card" style={{ margin: "3%" }}>
      <div className="row no-gutters" width="100%">
        <div className="col-md-4">
          <img src={t.image[0].url} className="ambulance" alt="..." />
        </div>
        <div className="col-md-8 text">
          <div className="card-body">
            <p className="ambtitle">{t.machineName}</p>
            <table className="ambtable">
              <tr style={{ padding: "25px" }}>
                <td style={{ paddingLeft: "10px", paddingTop: "10px;" }}>
                  <Button variant="outline-secondary">
                    <Link
                      to={{ pathname: `/technology/${t._id}`, state: { t } }}
                    >
                      View Details
                    </Link>
                  </Button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
