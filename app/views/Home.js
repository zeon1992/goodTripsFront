import React, { useContext, useState } from 'react';
import { StyleSheet, View, ScrollView, ImageBackground, Modal } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import { FontStatus } from '../store';
import { Tabs, HeadLine, Dictionary, Card } from '../componenets';
import { City } from '../modal';

import data from '../../assets/data.json';

const Home = () => {
    const [cityModal, setCityModal] = useState(false);
    const fontsLoaded = useContext(FontStatus);
    const mainBG = require('../../assets/images/Tbilisi-Georgia.jpg');    
    return (
        <ScrollView style={{width: '100%'}} showsVerticalScrollIndicator={false}>
            <ImageBackground style={styles.headerImage} source={mainBG}>
                {fontsLoaded ? (
                    <Button iconRight buttonStyle={styles.headerButton} onPress={() => setCityModal(true)}
                        containerStyle={styles.headerContainer} titleStyle={styles.headerText} title="თბილისი"    
                        icon={<Icon name="chevron-down" size={15} type='font-awesome' color="#020552" />}
                    />
                ) : null}
            </ImageBackground>
            <View style={styles.contentContainer}>
                <Tabs />
                {/* ლექსიკონი */}
                <HeadLine text={'ლექსიკონი'} />
                <Dictionary text={{geo: 'დღიური ტურები', eng: 'Day Trips'}} />
                <Dictionary text={{geo: 'საუკეთესო რესტორნები თბილისში', eng: 'Best Restaurants In Tbilisi'}} />
                {/* ლექსიკონი */}
                {/* Trending Foods */}
                <HeadLine text={'Trending Foods'} />
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Card type="short" data={data.trendingFoods} />
                </ScrollView>
                <HeadLine text={'რესტორნები'} />
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Card type="large" data={data.foods} />
                </ScrollView>
                <HeadLine text={'Trending Places'} />
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Card type="short" data={data.trendingFoods} />
                </ScrollView>
                <HeadLine text={'სასტუმროები'} />
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Card type="medium" data={data.trendingFoods} />
                </ScrollView>
                <HeadLine text={'ღირსშესანიშნაობები'} />
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Card type="medium" data={data.trendingFoods} />
                </ScrollView>
                {/* Trending Foods */}
                <City visible={cityModal} close={setCityModal} animationType="slide" />
            </View>
        </ScrollView>
    );
}

export default Home;

const styles = StyleSheet.create({
   headerImage: {
       height: 185,
       alignItems: 'center',
       justifyContent: 'center'
   },
   headerButton: {
       borderRadius: 50,
       paddingHorizontal: 20,
       backgroundColor: '#FFFFFF',
    },
    headerText: {
       paddingTop: 7,
       borderRadius: 50,
       color: '#020552',
       marginRight: 10,
       fontSize: 18,
       fontFamily: 'Mrgvlovani'
   },
   headerContainer: {
       borderRadius: 50,
       overflow: 'hidden'
   },
   contentContainer: {
        marginTop: -30,
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#FDFDFD'
   }
});
