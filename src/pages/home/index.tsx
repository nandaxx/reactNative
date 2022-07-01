import React from 'react';
import { ScrollView } from "react-native-gesture-handler";
import { Title } from 'react-native-paper';
import Card from '../../components/card/cardCategoria';
import CardImg from '../../components/card/cardImage';
import CardPromo from '../../components/card/cardPropa';
import MySearch from '../../components/search';
//import {Icon, Button } from "react-native-elements";
//import Logout from '../login/sair';

const Home = ({navigation}) => {

    return (
        <ScrollView>
            <MySearch/>
       {/* <Button icon={<Icon name="check" size={15} color="white"/>}
        title="Sair"
        onPress={() => Logout(navigation)}
    />*/}
            <Card/>
            <Title>Recentes</Title>
            <CardImg/>
            <Title>Destaques</Title>
            <CardPromo/>
        </ScrollView>
    );
}

export default Home;