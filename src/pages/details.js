import React, {Component} from "react";
import api from "../services/api";
import { Container, Header, Name, Species, Detalhes, Avatar, ExtraInfo, Info, Created} from "./styles";


export default class Details extends Component{
    state = {
        details: [],
    };

    async componentDidMount(){
        const {route} = this.props;
        const {card} = route.params;
        const response = api.get(`/character/${card.id}`);

        this.setState({ details: response.data});
    }

    render (){
        const { route } = this.props;
        const { card } = route.params;
        const { details } = this.state;
   
        return(
            <Container>
                <Header>
                    <Avatar source={{uri: card.avatar}}/>
                    <Name> {card.name}</Name>
                    <Species>{card.species}</Species>
                    <Created>{card.created}</Created>
                    
                </Header>

                {/* <Detalhes
                    data={details}
                    keyExtractor={(detail) => (detail.id)}
                    renderItem={({item}) => (
                        <ExtraInfo>
                            <Info>
                                <Species>{item.species}</Species>
                                <Created>{item.created}</Created>
                               
                            </Info>    
                        </ExtraInfo>
                    )}


                /> */}
            
            </Container>

        );
    }
}