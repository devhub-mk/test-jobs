var empList = [
    {
      name: "John Doe",
      dept: "php",
      empId: 5,
    },
    {
      name: "Paul Smith",
      dept: "MERN",
      empId: 4,
    },
    {
      name: "Tom Smith",
      dept: "SEO",
      empId: 7,
    },
  ];
  
  empList.sort((a,b)=>{
    return a.empId - b.empId;
  })
  console.log(empList)