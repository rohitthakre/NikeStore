import React, { useState } from 'react';
import { StyleSheet, View ,Text, FlatList, TouchableOpacity, Image} from 'react-native';
import { COLORS, SIZES, images,FONTS } from '../constants';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const Home = () => {

    const [trending, setTrending] = useState([
        {
            id:0,
            name:"Niki Air Zoom Pegasus 36",
            img:images.nikePegasus36,
            bgColor:"#BF012C",
            type:"RUNNING",
            sizes:[6,7,8,9,10],
            prize:'$100'
        },
        {
            id: 1,
            name: "Nike Metcon 5",
            img: images.nikeMetcon5Black,
            bgColor:"#D39C67",
            type: "RUNNING",
            sizes: [6, 7, 8, 9, 10,11,12],
            prize: '$150'

        },
        {
            id: 2,
            name: "Niki Air Zoom Pegasus 36",
            img: images.nikeMetcon3,
            bgColor:"#7052A0",
            type: "RUNNING",
            sizes: [6, 7, 8, 9, 10],
            prize: '$696'

        },
        {
            id: 3,
            name: "Niki Air Zoom Pegasus 36",
            img: images.nikeMetcon4,
            bgColor: "#7052A0",
            type: "RUNNING",
            sizes: [6, 7, 8, 9, 10],
            prize: '$1550'

        },
        {
            id: 4,
            name: "Niki Air Zoom Pegasus 36",
            img: images.nikeMetcon6,
            bgColor: "#7052A0",
            type: "BASKETBOLL",
            sizes: [6, 7, 8, 9, 10],
            prize: '$100'

        },
    ])

    function renderTrendingShoes(item,index){

        let trendingStyle={};
        if(index ==0){
            trendingStyle = {marginLeft:SIZES.padding}
        }
        return(
            <TouchableOpacity style={{
                height:240,
                width:180,
                marginHorizontal:SIZES.base,
               justifyContent:'center',
                ...trendingStyle
            }}>
                <Text style={{color:COLORS.gray,...FONTS.h5}}>{item.type}</Text>
           <View 
           style={{
            flex:1,
            justifyContent:"flex-end",
            marginTop:SIZES.base,
            borderRadius:10,
            marginRight:SIZES.padding,
            paddingLeft:SIZES.radius,
            paddingRight:SIZES.radius,
            paddingBottom:SIZES.radius,
            backgroundColor:item.bgColor
           }}
           >
            <View style={{height:'35%',justifyContent:"space-between"}}>
                <Text style={{color:COLORS.white,...FONTS.body4}}>{item.name}</Text>
                <Text style={{color:COLORS.white,...FONTS.h3}}>{item.prize}</Text>
            </View>

           </View>
           <Image
            source={item.img}
            resizeMode='cover'
            style={{position:"absolute",
            top:50,
            right:0,
            width:"98%",
            height:80,
            transform:[
                {
                    rotate:'-15deg'
                }
            ]
        
        }}
           />
            </TouchableOpacity >
        )
    }

    return (
        <View style={styles.container}>
            <Text style={{marginTop:SIZES.radius,
            marginHorizontal:SIZES.padding,
            ...FONTS.largeTitleBold
            }} >TRENDING</Text>

            <View style={{height:260,marginTop:SIZES.radius}}>
                <FlatList
                     horizontal
                     showsHorizontalScrollIndicator={false}
                     data={trending}
                     keyExtractor={item =>item.id.toString()}
                     renderItem={({item,index})=>renderTrendingShoes(item,index)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    }
})

export default Home;