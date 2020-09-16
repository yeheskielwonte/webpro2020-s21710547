const account={
    name:"Owen",
    expenses :[],
};

function addExpenses(description,ammount){
    object={
        desc:description,
        expense:ammount,
    };
    account.expenses.push(object);
}

function getAccountSummary(){
    let total=0;
    account.expenses.forEach(function(el){
        total=total+el.Expense;
    })
    console.log("Total Pengeluaran "+account.name+" adalah Rp."+total);
}


addExpenses("Beli Minyak Tanah 1 Liter",16000);
addExpenses("Mie Goreng 5",15000);
addExpenses("Ongkos",5000);
getAccountSummary();

