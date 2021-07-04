
import { Dimensions, View, Text, TouchableOpacity, TextInput, StyleSheet, StatusBar, Alert} from 'react-native';
import React ,{Component} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Platform,FlatList} from 'react-native';
import { Constants } from 'react-native-unimodules';
import Feather from 'react-native-vector-icons/Feather';
import * as Animated from 'react-native-animatable';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
  
    TouchableRipple,
    Switch
} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

class ProfileScreen extends Component{
    state = {
        data: {
            email: '',
            check_textInputChange: false,
        },
        data2: {
            password: '',
        },
        data3: {
            confirm_password: '',
        },
        data4: {
            secureTextEntry: true,
        },
        data5:{
            confirm_secureTextEntry: true,
        }
       
    }
    textInputChange = (val) => {
        if (val.trim().length >= 4) {
            this.setState({
                data: {
                    email: val,
                    check_textInputChange: true,
                }
            });
        } else {
            this.setState({
                data: {
                    email: val,
                    check_textInputChange: false,
                }
            });
        }
    }
    handlePassChange = (val) => {
        this.setState({
            data2: {
                password: val,
            }

        })
    }
    handlePassChange_Confirm = (val) => {
        this.setState({
            data3: {
                confirm_password: val,
            },

        })
    }
    updateSecureTextEntry = () => {
        this.setState({
            data4: {
                secureTextEntry: !this.state.data4.secureTextEntry
            }
        })
    }
    updateSecureTextEntry_confirm = () => {
        this.setState({
            data5:{
                confirm_secureTextEntry:!this.state.data5.confirm_secureTextEntry,
            }
        })
    }
    check_password(val1,val)
    {
        if (val1===val)
        {
            return true;
        }
        else 
        {
            return false;
        }
    }
    render(){
        const { navigate } = this.props.navigation;
        return(

            <Animated.View style={styles.container}>
                
                 <StatusBar backgroundColor='#009387' barStyle="light-content" />

               <View style={styles.header}>
                 <Avatar.Image 
                                source={
                                    require('../Component/Seater/assets/users/user-7.jpg')
                                }
                                size={100}
                            />
                 </View>
                 <Animated.View animation="fadeInUpBig" style={styles.footer}>
                 
                    <Text style={styles.text_footer}> Name  </Text>
                        <View style={styles.action}>
                            
                            <TextInput
                                placeholder="Your Name"
                                style={styles.textInput}
                                autoCapitalize='none'
                            />
                        </View>
                        
                        <Text style={[styles.text_footer, { marginTop: 30 }]}> Phone Number  </Text>
                        <View style={styles.action}>
                           
                            <TextInput
                                placeholder="Your Phone Number"
                                style={styles.textInput}
                                autoCapitalize='none'
                            />
                        </View>

                        <Text style={[styles.text_footer, { marginTop: 30 }]}> Description  </Text>
                        <View style={styles.action}>
                          
                            <TextInput
                                placeholder="Your Job Description"
                                style={styles.textInput}
                                autoCapitalize= 'sentences'
                            />
                        </View>
                        <Text style={[styles.text_footer, { marginTop: 30 }]}> Email  </Text>
                        <View style={styles.action}>
                           
                            <TextInput
                                placeholder="Your Email"
                                style={styles.textInput}
                                autoCapitalize='none'
                                onChangeText={(val) => this.textInputChange(val)}
                            />
                            
                            
                            {this.state.data.check_textInputChange ?
                                <Animated.View animation="bounceIn">

                                    <Feather
                                        name="check-circle"
                                        color="#800080"
                                        size={20}
                                    />
                                </Animated.View>
                                : null}
                        </View>
                        <Text style={[styles.text_footer, { marginTop: 30 }]}> Password </Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="lock"
                                color="#05375a"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Password"
                                secureTextEntry={this.state.data4.secureTextEntry? true : false}
                                style={styles.textInput}
                                autoCapitalize='none'
                                onChangeText={(val)=>this.handlePassChange(val)}
                            />
                            <TouchableOpacity
                                onPress={this.updateSecureTextEntry}>
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                            </TouchableOpacity>

                        </View>
                        <Text style={[styles.text_footer, { marginTop: 30 }]}> Confirm Password </Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="lock"
                                color="#05375a"
                                size={20}
                            />
                            <TextInput
                                placeholder="Confirm Password"
                                secureTextEntry={this.state.data5.confirm_secureTextEntry ? true : false}
                                style={styles.textInput}
                                autoCapitalize='none'
                                onChangeText={(val)=>this.handlePassChange_Confirm(val)}
                            />
                            <TouchableOpacity
                                onPress={this.updateSecureTextEntry_confirm}>
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                            </TouchableOpacity>

                        </View>
                        <View style={styles.button}>
                        {this.check_password(this.state.data2.password,this.state.data3.confirm_password) ? 
                            <TouchableOpacity 
                           
                                style={[styles.signIn,
                                {
                                    borderColor: '#800080',
                                    borderWidth: 1,
                                    marginTop: 15
                                }]}
                                onPress={()=>{
                                    navigate("Seater Home ");
                                }}>

                                <Text
                                    style={[styles.textSign, {
                                        color: '#800080'
                                    }]}
                                >Edit Profile</Text>
                            </TouchableOpacity>

                            :null}
                        </View>
                      
                      </Animated.View>
                
                
            </Animated.View>
        );
    }
}


export default ProfileScreen;
const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#694fad',
      flexDirection: 'column'
    },
    header: {
        
        flex:1.75,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingBottom: 10
    },
    footer: {
        flex: 8,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 30

    },
    ProfilePic: {
        width: height_logo,
        height: height_logo
    },
     textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    title: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 40
    },
    text_footer: {
        color: '#05375a',
        fontSize: 10
    },

    button: {

        alignItems: 'flex-end',
        marginTop: 10,
    },
    signIn: {
        width: 160,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    
});