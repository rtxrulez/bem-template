console.log('this app');

var News = React.createClass({
    render: function() {
        return (
            <div className="news">
                Тут новости
            </div>
        )
    }
});

var Comments = React.createClass({
    render: function() {
        return (
            <div className="comments">
                Нет новостей - комментировать нечего.
            </div>
        )
    }
});

var App  = React.createClass({
    render: function() {
        return (
            <div className="app">
                Всем привет
                <News />
                <Comments />
            </div>
        )
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
