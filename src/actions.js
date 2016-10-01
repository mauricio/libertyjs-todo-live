import reactor from "./reactor.js";
import request from "request";
import ActionTypes from "./actionTypes.js";

const baseRequest = request.defaults({
  headers: {'Accept': 'application/json'},
  json: true
});

const baseUrl = "http://localhost:3000/task_lists";

export default {

   updateTodoList(name, todos) {
        baseRequest.post({ url: baseUrl + "/create_or_update", body: {
                task_list: {
                    title: name,
                    tasks: todos
                }
            } 
        }, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                var list = Immutable.Map()
                    .set("title", name)
                    .set("tasks", todos);

                reactor.dispatch(ActionTypes.UPDATE_TODO_LIST, list);
            } else {
                console.log(error);
                console.log(response);
            }
        });
    },
    
    listTodoLists() {

    }

} 