var React = require('react');
var ReactDOM = require('react-dom');

var router = require('react-router');

var Router = router.Router;
var Route = router.Route;
var Link = router.Link;
var IndexRoute = router.IndexRoute;
var hashHistory = router.hashHistory;

var View1 = require('./view/view1.jsx');
var View2 = require('./view/view2.jsx');

class Main extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/view1"><button>View 1</button></Link>
                    <Link to="/view2"><button>View 2</button></Link>
                </div>
                <div>{this.props.children}</div>
            </div>
        )
    }
}
// Для задачи #2
class Home extends React.Component {
    render() {
        return (
            <h3>This is the homepage</h3>
        )}
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route component={Main}>
            {/*Установка домашней страницей компонент Home для задачи 2*/}
            <Route path='/' component={Home}/>
            <Route path="view1" component={View1} />
            <Route path="view2" component={View2} />
            {/*Установка Home компонентом для любого запроса пути, который не входит в конфигурацию для задачи 3*/}
            <Route path="*" component={Home}/>
        </Route>
    </Router>, document.getElementById('output'));