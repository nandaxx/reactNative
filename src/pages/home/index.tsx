import React from 'react';
import { ScrollView } from "react-native-gesture-handler";
import { Title } from 'react-native-paper';
import Card from '../../components/card/cardCategoria';
import CardImg from '../../components/card/cardImage';
import CardPromo from '../../components/card/cardPropa';
import MyHeader from '../../components/header/index';
import MySearch from '../../components/seach';

const Home = () => {

    return (
        <ScrollView>
            <MyHeader/>
            <MySearch/>
            <Card/>
            <Title>Recentes</Title>
            <CardImg/>
            <Title>Destaques</Title>
            <CardPromo/>
        </ScrollView>
    );
}

export default Home;