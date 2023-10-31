import React, { useState } from 'react';
import { StyleSheet, View ,Text, FlatList, TouchableOpacity, Image,Modal} from 'react-native';
import { COLORS, SIZES, images,FONTS } from '../constants';
import { Svg,Polygon } from 'react-native-svg';
import {BlurView} from "@react-native-community/blur"

const Home = () => {

    const [showAddToBagModel, setShawAddToBagModel]=useState(false)
    const [selectedItem,setSelectedItem] = useState(null)
    const [selectedSize , setSelectedSize]= useState("")

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

    const [recentlyViewed,setRecentlyViewed]=useState([
        {
            id: 0,
            name: "Niki Air Zoom Pegasus 36",
            img: images.nikePegasus36,
            bgColor: "#BF012C",
            type: "RUNNING",
            sizes: [6, 7, 8, 9, 10],
            prize: '$100'
        },
        {
            id: 1,
            name: "Nike Metcon 5",
            img: images.nikeMetcon5Black,
            bgColor: "#D39C67",
            type: "RUNNING",
            sizes: [6, 7, 8, 9, 10, 11, 12],
            prize: '$150'

        },
        {
            id: 2,
            name: "Niki Air Zoom Pegasus 36",
            img: images.nikeMetcon3,
            bgColor: "#7052A0",
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
            }}
            onPress={()=>{
                setSelectedItem(item)
                setShawAddToBagModel(true)
            }}
            >
                <Text style={{color:COLORS.gray,...FONTS.h5}}>{item.type}</Text>
           <View 
           style={[{
            flex:1,
            justifyContent:"flex-end",
            marginTop:SIZES.base,
            borderRadius:10,
            marginRight:SIZES.padding,
            paddingLeft:SIZES.radius,
            paddingRight:SIZES.radius,
            paddingBottom:SIZES.radius,
            backgroundColor:item.bgColor
           },styles.trendingShadow]}
           >
            <View style={{height:'35%',justifyContent:"space-between"}}>
                <Text style={{color:COLORS.white,...FONTS.body4}}>{item.name}</Text>
                <Text style={{color:COLORS.white,...FONTS.h3}}>{item.prize}</Text>
            </View>

           </View>
           <View style={{position:"absolute",top:27,right:0,
           width:"95%",height:"100%"}}>
            <Svg height="100%" width="100%">
                <Polygon
                points="0,0 160,0 160,80"
                fill="white"
                />
            </Svg>

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

    function renderRecentlyViewed(item,index){
        return(
            <TouchableOpacity 
            style={{flex:1,flexDirection:"row"}}
            onPress={()=>{
                console.log("renderRecentlyViewed");
            }}
            >
                <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                    <Image source={item.img} 
                    resizeMode='contain'
                    style={{
                        width:130,
                        height:100
                    }}
                    />
                </View>
                <View style={{flex:1.5,marginLeft:SIZES.radius,justifyContent:"center"}}>
                    <Text style={{color:COLORS.gray,...FONTS.body3}}>{item.name}</Text>
                    <Text style={{...FONTS.h3}} >{item.prize}</Text>
                </View>
            </TouchableOpacity>
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

            {/* Recent view  */}
                <View 
                style={[{
                    flex:1,
                    flexDirection:"row",
                    marginTop:SIZES.padding,
                    borderTopLeftRadius:30,
                    borderTopRightRadius:30,
                    backgroundColor:COLORS.white,
                },styles.recentContainerShadow]}
                >
                    <View
                    style={{width:70,marginLeft:SIZES.base}}
                    >
                        <Image source={images.recentlyViewedLabel}
                        resizeMode='contain'
                        style={{
                            width:"100%",
                            height:"100%"
                        }}
                        />
                    </View>
                    <View style={{flex:1,paddingBottom:SIZES.padding}}>
                        <FlatList
                        showsVerticalScrollIndicator={false}
                        data={recentlyViewed}
                        keyExtractor={item =>item.id.toString()}
                        renderItem={({item,index})=>renderRecentlyViewed(item,index)}
                        />
                    </View>
                </View>

                {/* Model */}
                {selectedItem && 
                <Modal
                animationType ="slide"
                transparent={true}
                visible={showAddToBagModel}
                >
                    <BlurView
                    style={{flex:1,justifyContent:"center",alignItems:"center"
                            }}
                blurType='light'
                blurAmount={20}
                reducedTransparencyFallbackColor='white'
                    >
                        <TouchableOpacity
                        style={styles.absolute}
                        onPress={()=>{
                            setSelectedItem(null);   
                            setSelectedSize("");
                            setShawAddToBagModel(false)
                        }}
                        >
                        </TouchableOpacity>
                            {/* Model Content */}

                        <View style={{ justifyContent: "center", width: "85%",height:150, backgroundColor: selectedItem.bgColor}}>
                                <View>
                                    <Image
                                    source={selectedItem.img}
                                    resizeMode='contain'
                                    style={{
                                        width:"90%",
                                        height:170,
                                        transform:[
                                            {
                                                rotate:'-15deg'
                                            }
                                        ]
                                    }}
                                    />
                                </View>
                            </View>
                    </BlurView>
                </Modal>
                }        
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    trendingShadow:{
        shadowCOlor:"#000",
        shadowOffset:{
            width:0,
            height:5,
        },
        shadowOpacity:0.29,
        shadowRadius:4.65,
        elevation:7
    },
    recentContainerShadow:{
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:7,
        },
        shadowOpacity:0.43,
        shadowRadius:9.51,
        elevation:15
    },
    absolute:{
        position:"absolute",
        top:0,
        bottom:0,
        right:0,
        right:0
    }
})

export default Home;