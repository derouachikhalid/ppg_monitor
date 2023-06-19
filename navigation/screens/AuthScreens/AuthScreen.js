
import { Text, View , StyleSheet,Dimensions,Image,TouchableOpacity } from 'react-native';
import { user } from '../../data';

const { height } = Dimensions.get("window");

export default  AuthScreen = ({navigation}) => {
  setInterval(()=>{
    if(user.id){
      navigation.navigate("Profile");
    }
  },0)
  
  return (
     <View style={styles.container} >
       <Image
           style={{
             height: height / 3,
             width :250,
             marginTop:40
           }}
           resizeMode="contain"
           source={require("../../../assets/images/welcome-img.png")}
         />
         <View
           style={{
             paddingHorizontal: 10,
             paddingTop: 10,
             paddingVertical: 35,
           }}
         >
             <Text
             style={{
               fontSize : 30,
               color: "#1f41bb",
               textAlign: "center",
             }}
           >
             CONNECTEZ-VOUS
           </Text>
           <Text
             style={{
               fontSize: 15,
               color: "#555",
               textAlign: "center",
             }}
           >
             Partager vos signaux biophysiques, et bénificier d'une consultation de votre médecin. 
           </Text>

         </View>
         <View
           style={{
             paddingHorizontal: 20,
             flexDirection: "row",
             justifyContent : "space-between"
           }}
         >
             <TouchableOpacity
           onPress={()=>navigation.navigate('ReviewDetails')}
             style={{
               backgroundColor: "#1f41bb",
               marginHorizontal :3,
               paddingVertical: 5,
               paddingHorizontal: 3,
               width: "45%",
               borderRadius: 3,
               shadowColor: "#555",
               shadowOffset: {
                 width: 0,
                 height: 2,
               },
               shadowOpacity: 0.3,
               shadowRadius: 2,
             }}
           >
             <Text
               style={{
                 color: "#fff",
                 fontSize: 15,
                 textAlign: "center",
               }}
             >
               SE CONNECTER
             </Text>
           </TouchableOpacity>
           <TouchableOpacity
           onPress={()=>alert("Register")}
             style={{
               marginHorizontal :3,
               paddingVertical: 5,
               paddingHorizontal: 3,
               width: "45%",
               borderRadius: 3,
               borderColor : "#555",
               borderStyle :'solid',
               borderWidth : 1
              
             }}
           >
             <Text
               style={{
                 color: "#555",
                 fontSize: 15,
                 textAlign: "center",
               }}
             >
               CRER UN COMPTE
             </Text>
           </TouchableOpacity>


         </View>
     </View>
  );
}


  const styles = StyleSheet.create({
    container : {
        alignItems : "center",
        justifyContent : "center"
    },
    image : {
        flex : 1
    }
  })