import { showAlert } from "../slices/securitySlice";

// Thunk-Function Creator
export const ejecutarConTry =
  (thunkFunction) => async (dispatch, getState) => {

    // Mostrar loading

    try{
        await thunkFunction(dispatch, getState);
        // Ocultar loading
    }catch(err){

        dispatch(
          showAlert({
            open: true,
            type: "error",
            message: "Ha ocurrido un error!",
          })
        );

    }
  };



