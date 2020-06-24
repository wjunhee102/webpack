const actions = {
  nameChange : function(context, payload) {
    context.commit("ADDNAME");
    return
  },
  dataFetch : function(context, payload) {
    try {
      const data = payload
      console.log(data);
    } catch {
      console.log(error);
    } finally {
      console.log("실행됨");
      context.commit("ADDNAME");
    }
    return
  }
}

export default actions