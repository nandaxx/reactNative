import React from 'react';
import { ScrollView } from "react-native-gesture-handler";
import { Title } from 'react-native-paper';
import AxiosInstance from '../../api/axiosInstance';
import Card from '../../components/card/cardCategoria';
import CardImg from '../../components/card/cardImage';
import CardPromo from '../../components/card/cardPropa';
import MySearch from '../../components/search';
import { AutenticacaoContext } from "../../context/autenticacaoContext";


const Home = ({ navigation}) => {
    return (
        <ScrollView>
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