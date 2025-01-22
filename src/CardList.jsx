import Card from "./Card";

function CardList() {
    const list = [
        {name: 'Tran Phuc Hung', description: 'A java developer who\'s new to ReactJS'},
        {name: 'Hng', description: 'I code games'},
        {name: 'HngBH', description: 'I\'m addicted to Brawlhalla'},
        {name: 'Tobo', description: 'A guitarist who can write code'},
    ];

    const renderList = list.map(i => <Card name={i.name} description={i.description}></Card>)
    return(<>
        {renderList}
    </>);
}

export default CardList