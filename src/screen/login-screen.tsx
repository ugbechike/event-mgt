import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback} from 'react';
import {theme} from '../theme';
import {Divider, Text} from '../components';
import {useForm, Controller} from 'react-hook-form';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useLoginMutation} from '../hooks';

export type LoginFormData = {
  email: string;
  password: string;
};

export const LoginScreen = ({navigation}: any) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormData>();
  const {mutateAsync, isPending} = useLoginMutation();

  const onSubmit = useCallback(
    async (data: LoginFormData) => {
      try {
        await mutateAsync(data);
      } catch (error) {
        console.error('Error logging in: ', error);
      }
    },
    [mutateAsync],
  );

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text textStyle="large" style={styles.loginText}>
          Hi, Welcome Back! 👋
        </Text>
        <Divider size={20} />
        <View>
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
          <Divider size={6} />
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
          <Divider size={6} />
          <View>
            <TouchableOpacity>
              <Text textStyle="subTitle">Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <Divider size={6} />

          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={styles.button}>
            {isPending ? (
              <Text>Loading..</Text>
            ) : (
              <Text textStyle="title">Login</Text>
            )}
          </TouchableOpacity>

          <Divider size={20} />

          <View style={styles.textContainer}>
            <View style={styles.horizontalLine} />
            <Text textStyle="title">Or with</Text>
            <View style={styles.horizontalLine} />
          </View>

          <Divider size={16} />

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

          <Divider size={16} />

          <TouchableOpacity
            style={styles.signup}
            onPress={() => navigation.navigate('Signup')}>
            <Text textStyle="title">
              Don't have an account?{' '}
              <Text style={styles.signupText}> Sign up</Text>
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
