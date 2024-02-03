# Tools used
1) Backend -
   1) Backend is developed using C#, Entity Framework, Web Api.
   2) Database - Sql Server 2019.
   3) IDE - Visual Studio Code
   4) Download .NET Sdk 8.0
2) FrontEnd -
   1) FrondEnd is developed using React JS, HTML, CSS and Javascript.

# Api End Points
1) Get Product List - http://localhost:5017/api/Product/GetProducts
2) Post Product - http://localhost:5017/api/Product/PostProduct
3) Put Product - http://localhost:5017/api/Product/PutProduct
4) Delete Product - http://localhost:5017/api/Product/GetProductById/1

# Follow the Process to run this application
1) Clone this repository
2) Open git bash and run - git clone https://github.com/SayeddilawarG/FashionHub.git.
3) open Api folder and Dev folder in separate window of VS code.
4) In Visual Studio code install below Nuget packages and extension,
    1).Net Install Tool
    2) C#
    3) NuGet Package Manager
Install below packages using this command **dotnet add package <PACKAGE_NAME>**
    1) Microsoft.EntityFrameworkCore Version=8.0.1
    2) Microsoft.EntityFrameworkCore.SqlServer Version=8.0.1
    3) Microsoft.EntityFrameworkCore.Design" Version=8.0.1
5) Open api folder in visual studio code and Run the Api using **<path>\FashionHub\Api>dotnet run**
6) Open the Dev folder in visual studio code and Run the FrontEnd - **FashionHub\Dev\fashion-hub>npm start**


