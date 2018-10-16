export const reducer =  (state = 0, action) => {


    if(action.type == "MOVIES_TOGGLE"){
        return {
            listEnabled: action.enabled
        }
    }

    return {
        listEnabled:true
    }
  }