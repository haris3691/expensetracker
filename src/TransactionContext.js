
import React,{createContext,useReducer} from "react";
import TransactionReducer from './transReducer';

const initialTransactions = [
        {amount :500 ,desc :"Cash"},
        {amount :-50 ,desc :"colddrink"},
        {amount :-200 ,desc :"Camera"},
    ]

    export const transactionContext = createContext(initialTransactions);
export const TransactionProvider = ({children})=>{
    let[state, dispatch] = useReducer(TransactionReducer, initialTransactions);

    function addTransaction(transObj){
        dispatch({
            type:"Add_Transaction",
            payload: {
                amount:transObj.amount,
                desc:transObj.desc,
            },
        })
    }
return(
    <transactionContext.Provider value={{
        transactions: state,
        addTransaction
    }}>
{children}
    </transactionContext.Provider>

)
}

