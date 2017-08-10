console.log('this app');

var my_news = [
    {
        picture: 'images/layer-4.jpg',
        author: 'Саша Печкин',
        text: 'В четверг, четвертого числа...'
    }, {
        picture: 'images/layer-4.jpg',
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!'
    }, {
        picture: 'images/layer-4.jpg',
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
    }
];
// my_news = [];

// принимает атрибут data
var Article = React.createClass({
    render: function() {
        var picture = this.props.data.picture;
        var author = this.props.data.author;
        var text = this.props.data.text;

        return (
            <div>
                <img className="news__picture" src={picture}></img>
                <p className="news__author">{author}:</p>
                <p className="news__text">{text}</p>
            </div>
        )
    }
})


var News = React.createClass({
    render: function() {
        console.log(this.props.data)
        var data = this.props.data;
        var newsTemplate;

        if(data.length > 0) {
            newsTemplate = data.map(function(item, index) {
                return (
                    <div key={index}>
                        <Article data={item}/>
                    </div>
                )
            })
        } else {
            newsTemplate = <p>К сожалению нет новостей!</p>
        }


        return (
            <div className="news">
                {newsTemplate}
                <strong className={data.length>0? '' : 'none'}>Всего новостей: {data.length}</strong>
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



var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                Всем привет
                <News data={my_news}/>
                <Comments/>
            </div>
        )
    }
});

ReactDOM.render(
    <App/>, document.getElementById('root'));
