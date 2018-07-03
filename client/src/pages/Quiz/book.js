
// render() {
//     <div class="container">
//         <div class="panel panel-default">
//             <div class="panel-heading">
//                 <h3 class="panel-title">
//                     BOOK CATALOG &nbsp;
//                 {localStorage.getItem('jwtToken') &&
//                         <button class="btn btn-primary" onClick={this.logout}>Logout</button>
//                     }
//                 </h3>
//             </div>
//             <div class="panel-body">
//                 <table class="table table-stripe">
//                     <thead>
//                         <tr>
//                             <th>ISBN</th>
//                             <th>Title</th>
//                             <th>Author</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.state.books.map(book =>
//                             <tr>
//                                 <td><Link to={`/show/${book._id}`}>{book.isbn}</Link></td>
//                                 <td>{book.title}</td>
//                                 <td>{book.author}</td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     </div>
// }