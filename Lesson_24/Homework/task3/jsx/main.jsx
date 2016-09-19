var React = require('react');
var ReactDOM = require('react-dom');

var router = require('react-router');

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Router = router.Router;
var Route = router.Route;
var Link = router.Link;
var IndexRoute = router.IndexRoute;
var hashHistory = router.hashHistory;

var ListView = require('./view/list.jsx');
var TableView = require('./view/table.jsx');
var User = require('./view/user.jsx');

var users = [{first_name:"Matthew",last_name:"Phillips",email:"mphillips0@myspace.com",gender:"Male",ip_address:"14.241.172.154", id:23468},
    {first_name:"Larry",last_name:"Weaver",email:"lweaver1@slideshare.net",gender:"Male",ip_address:"126.139.9.128", id:89078},
    {first_name:"Barbara",last_name:"Tucker",email:"btucker2@cbc.ca",gender:"Female",ip_address:"92.195.229.16", id: 56435},
    {first_name:"Jonathan",last_name:"Cook",email:"jcook3@fc2.com",gender:"Male",ip_address:"187.79.225.71", id:78908},
    {first_name:"Jean",last_name:"Flores",email:"jflores4@last.fm",gender:"Female",ip_address:"222.197.158.249", id:67653},
    {first_name:"Kimberly",last_name:"Nelson",email:"knelson5@nifty.com",gender:"Female",ip_address:"111.174.89.57", id:83425},
    {first_name:"Willie",last_name:"Banks",email:"wbanks6@abc.net.au",gender:"Male",ip_address:"97.0.19.154", id:99873},
    {first_name:"Michael",last_name:"King",email:"mking7@w3.org",gender:"Male",ip_address:"149.114.62.6", id: 34239}];

class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div>
                    <Link to={{pathname: '/listView'}}><button>ListView</button></Link>
                    <Link to={{pathname: '/tableView'}}><button>TableView</button></Link>
                </div>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <Route path="listView" component={ListView} users={users}/>
            <Route path="listView/:id" component={User} />
            <Route path="tableView" component={TableView} users={users}/>
            <Route path="tableView/:id" component={User} />
        </Route>
    </Router>, document.getElementById('output'));