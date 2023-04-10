module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    concat: (a, b) => {
      //concatinate values
     
     return a + b;
    },
    not:(a)=>{
     return !a;
    }
  };
  
