import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {theme} from '../theme';
import {Divider, Text} from '../components';
import {useForm, Controller} from 'react-hook-form';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useSignupMutation } from '../hooks';

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const SignupScreen = ({navigation}: any) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();
  const {mutateAsync, isPending} = useSignupMutation();

  const onSubmit = async (data: FormData) => {
    try {
      await mutateAsync(data);
    } catch (error) {
      console.error('Error creating user: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text textStyle="large" style={styles.loginText}>
          Hi, Welcome to eventTus! 👋
        </Text>
        <Divider size={14} />
        <View>
          <Text textStyle="label">First name</Text>
          <Divider size={4} />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                placeholder="Enter first name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.inputStyle}
                placeholderTextColor={theme.colors.grey}
              />
            )}
            name="firstName"
          />
          <Divider size={5} />
          <Text textStyle="label">Last name</Text>
          <Divider size={4} />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                placeholder="Enter last name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.inputStyle}
                placeholderTextColor={theme.colors.grey}
              />
            )}
            name="lastName"
          />
          <Divider size={5} />

          <Text textStyle="label">Email</Text>
          <Divider size={4} />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                placeholder="Enter email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.inputStyle}
                placeholderTextColor={theme.colors.grey}
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text textStyle="small" style={styles.errorText}>
              This is required.
            </Text>
          )}
          <Divider size={5} />
          <Text textStyle="label">Password</Text>
          <Divider size={4} />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                placeholder="Enter Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.inputStyle}
                placeholderTextColor={theme.colors.grey}
              />
            )}
            name="password"
          />
          <Divider size={5} />

          <Text textStyle="label">Confirm Password</Text>
          <Divider size={4} />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                placeholder="Enter Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.inputStyle}
                placeholderTextColor={theme.colors.grey}
              />
            )}
            name="password"
          />
          <Divider size={5} />

          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={styles.button}>
            {isPending ? (
              <Text>Loading...</Text>
            ) : (
              <Text textStyle="title">Sign up</Text>
            )}
          </TouchableOpacity>

          <Divider size={14} />

          <View style={styles.textContainer}>
            <View style={styles.horizontalLine} />
            <Text textStyle="title">Or with</Text>
            <View style={styles.horizontalLine} />
          </View>

          <Divider size={10} />

          <TouchableOpacity style={styles.socialAuthButton}>
            <View style={styles.socialIconWrapper}>
              <IonIcon
                name="logo-google"
                size={30}
                color={theme.colors.white}
              />
            </View>

            <Text textStyle="title" style={styles.socialText}>
              Login with Google
            </Text>
          </TouchableOpacity>

          <Divider size={10} />

          <TouchableOpacity
            style={styles.signup}
            onPress={() => navigation.navigate('Login')}>
            <Text textStyle="title">
              Already have an account?{' '}
              <Text style={styles.signupText}> Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  loginText: {
    textAlign: 'center',
  },
  inputStyle: {
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    borderColor: theme.colors.grey,
    color: theme.colors.white,
  },
  errorText: {
    color: theme.colors.red,
  },
  label: {
    color: theme.colors.grey,
  },
  button: {
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: theme.colors.lightGreen,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.grey,
    marginVertical: 10,
    width: '40%',
  },
  socialAuthButton: {
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'space-between',
    backgroundColor: theme.colors.darkGrey,
    flexDirection: 'row',
  },
  socialIconWrapper: {
    width: '10%',
  },
  socialText: {
    width: '90%',
    textAlign: 'center',
  },
  signup: {
    alignItems: 'center',
  },
  signupText: {
    color: theme.colors.lightGreen,
  },
});
