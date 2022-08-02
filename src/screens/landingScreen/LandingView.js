import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../config/colors';
import CustomButton from '../../customComponents/CustomButton';
import EngText from '../../customComponents/EngText';

export default function LandingView({navigateToLogin}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={{height: '8%', paddingVertical: 10, alignItems: 'center'}}>
          <AntDesign name="twitter" color={colors.blue} size={30} />
        </View>

        <View
          style={{
            height: '50%',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text style={{fontSize: 32, fontWeight: 'bold'}}>
            See what's happening in the world right now.
          </Text>
        </View>

        <View style={{height: '30%', justifyContent: 'center'}}>
          <CustomButton
            icon={
              <Image
                source={require('../../assets/google.png')}
                style={{width: 28, height: 28, marginRight: 5}}
                resizeMode="contain"
              />
            }
            label={'Continue with Google'}
          />
          <CustomButton
            icon={
              <AntDesign
                name="apple1"
                color={colors.black}
                size={24}
                style={{marginRight: 5}}
              />
            }
            label={'Continue with Apple'}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              alignSelf: 'center',
              marginVertical: 5,
            }}>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: colors.grey,
              }}
            />
            <View>
              <EngText style={{width: 50, textAlign: 'center'}}>or</EngText>
            </View>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: colors.grey,
              }}
            />
          </View>
          <CustomButton
            label={'Create acount'}
            style={{backgroundColor: colors.black, borderWidth: 0}}
          />
        </View>
        <View style={{height: '12%', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 14, color: colors.lightBlack}}>
            By signing up, you agree to our{' '}
            <Text style={{color: colors.blue}}>Terms</Text>,{' '}
            <Text style={{color: colors.blue}}>Privacy Policy</Text>, and{' '}
            <Text style={{color: colors.blue}}>Cookie Use</Text>
          </Text>
          <Text
            onPress={() => navigateToLogin()}
            style={{fontSize: 14, color: colors.lightBlack}}>
            Have an account already?{' '}
            <Text style={{color: colors.blue}}>Log in</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: '10%',
  },
});
