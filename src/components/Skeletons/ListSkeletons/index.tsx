import React from "react";
import { ListItem, List, Divider } from "@material-ui/core";
import Helper from "utils/Helper";
import Skeleton from "@material-ui/lab/Skeleton";

type ListSkeletonsType = {
  items?: number;
};

function ListSkeletons(props: ListSkeletonsType) {
  let randomList = Helper.createIteratedArray(
    props.items ? props.items : Helper.getRandomNumber(3, 10)
  );
  return (
    <List style={{ width: "100%" }}>
      {randomList.map((index) => (
        <React.Fragment key={index}>
          <ListItem button>
            <Skeleton animation="wave" style={{ width: "100%" }} />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}

export default ListSkeletons;
