This application is my attempt to build a sortable table using React. Currently, my table can create a row object, read, and delete it. The next step is the ability to edit in-line rows and sort the column. My application consists of 9 components: <br />
+AddTableForm.js <br />
+App.js <br />
+CreateTable.js <br />
+EditRow.js <br />
+Inventory.js <br />
+NotFound.js <br />
+Router.js <br />
+Row.js <br />
+TableHeader.js <br />
1) First, the user needs to input their name, and the application will promptly proceed to the main page.
2) Then, the user can create and delete the row(s). </br/>
There are a couple of ways that we could sort our rows. The first way is to use the sort() function. The sort() function will compare all the elements inside a given array. By default, it will sort ascendingly. The sort() will return a negative number. The first item, a, is less than b and moved up, indicating ascending order and vice versa. However, there is one obstacle to this approach. In the Unicode table, capital letters have lesser values than smaller letters. For example, if a is "Ibas" and b is "doe." We expect that _doe_ will be listed before _Ibas_; however, we will see the opposite using only the sort(). 

*Note 
Object property order is not guaranteed in JavaScript, so sorting should be done into an array, not an object
![Screen Shot 2022-03-17 at 3 51 13 AM](https://user-images.githubusercontent.com/61608148/158762311-fe070178-6e40-4a0b-8735-55282e249b1d.png)
![Screen Shot 2022-03-17 at 3 53 53 AM](https://user-images.githubusercontent.com/61608148/158762409-a6c86777-a3a1-418d-9d3d-2c0e60c8e209.png)
![Screen Shot 2022-03-17 at 3 08 43 PM](https://user-images.githubusercontent.com/61608148/158877816-47576492-6485-48d8-a005-2adf36774359.png)
