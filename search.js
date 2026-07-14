
debounce Until
//find employee whose salary is greater than their manager's salary
 
Employee id name salary , manager id 

Select name  from Employee as emp where salary > (
    select salary from Employee as manager where emp.id = manager.id
)

//delete duplicate records without temporary table
 
Delete from employee where empid = (
    select empid, count(*) from emp  groupBy empid having count(*)>1
)







