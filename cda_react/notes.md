- Anciennement class component

class Home () {

}

Cycle de vie:

1. componentDidMount() => au montage du composant => à l'initiation/à l'affichage
2. componentWillUnmount() => au démontage du composant => quand on quitte la page
3. componentDidUpdate() => à chaque changement d'état

- Moderne functional component

const Home = () => {

}

1. useEffect()
