
const state = {
    funds : 10000,
    stocks : []
};

const mutations = {
    'BUY_STOCK'(state, { stockId, quantity, stockPrice}){
        const record = state.stocks.find( element => element.id == stockId );
        if (record){
            record.quantity += quantity;
        } else{
            state.stocks.push({
                 id: stockId,
                 quantity: quantity
            });
        }
        state.funds -= stockprice * quantity; 
    },
    'SELL_STOCK' (state, { stockId, quantity, stockPrice}){
        const record = state.stocks.find( element => element.id == stockId );
        if(record.quantity > quantity){
            record.quantity -= quantity
        }else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity
    }
}