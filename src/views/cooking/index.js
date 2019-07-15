import React from "react";
import { connect } from "react-redux";
import { getCookingAsync } from "../../store/actions";
import Grid from "../../component/presentGrid/index";

export default connect(
  state => ({
    cooking: state.cooking
  }),
  { getCookingAsync }
)(function(props) {
  if (!props.cooking) {
    props.getCookingAsync("cooking");
  }
  return (
    <div style={{ padding: "5%" }}>
      <Grid
        {...props.cooking}
        onclick={() => props.getCookingAsync("cooking")}
      />
    </div>
  );
});
