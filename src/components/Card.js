import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const styles = {
  root: {
    maxWidth: 345,
  },
};

const CustomCard = ({ title, summary, tag, targetlabel }) => {
  return (
    <Card style={styles.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {tag}
        </Button>
        <Button size="small" color="primary">
          {targetlabel}
        </Button>
      </CardActions>
    </Card>
  );
};

CustomCard.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  tag: PropTypes.string,
  targetlabel: PropTypes.string,
};

export default CustomCard;
