import React from "react";
import { connect } from "react-redux";
import { getRecreationalAsync } from "../../store/actions";
import Grid from "../../component/presentGrid/index";

export default connect(
  state => ({
    recreational: state.recreational
  }),
  { getRecreationalAsync }
)(function(props) {
  if (!props.recreational) {
    props.getRecreationalAsync("recreational");
  }
  return (
    <div style={{ padding: "5%" }}>
      <Grid
        {...props.recreational}
        onclick={() => props.getRecreationalAsync("recreational")}
      />
    </div>
  );
});
