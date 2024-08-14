package my.web.todoapp.controller;

import my.web.todoapp.model.Todo;
import my.web.todoapp.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todo")
public class TodoController {
@Autowired
    TodoRepository todoRepository;
@GetMapping("/get-all-todo-list")
    public List<Todo> getAllTodoList(){

    return this.todoRepository.findAll();
}
@PostMapping("/add-todo")
    public ResponseEntity<?> addTodo(@RequestBody Todo todo) {
    return new ResponseEntity<>(this.todoRepository.save(todo), HttpStatus.CREATED);
}
@DeleteMapping("/delete-todo/{id}")
    public ResponseEntity<?> removeTodo(@PathVariable  Integer id) {
    if(this.todoRepository.findById(id).isPresent()) {
        this.todoRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
@PostMapping("/update-todo/{id}")
    public  ResponseEntity<?> updateTodo(@PathVariable Integer id , @RequestBody Todo todo) {
    if(this.todoRepository.findById(id).isPresent()) {
        todo.setId(id);
        return new ResponseEntity<>(this.todoRepository.save(todo) , HttpStatus.OK);

    }
    else {
        return  new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}

}
