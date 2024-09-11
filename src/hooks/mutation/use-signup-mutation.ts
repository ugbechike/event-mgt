import { useMutation } from '@tanstack/react-query';
import { FormData } from '../../screen/signup-screen';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { UserAuth } from '../../features/hooks/use-auth';
import { MUTATION_KEYS } from '../keys';

export const useSignupMutation = () => {
    const { setTokenAction } = UserAuth();

    const mutation = useMutation({
        mutationKey: MUTATION_KEYS.Signup,
        mutationFn: async (data: FormData) => {
            try {
                const userCredential = await auth().createUserWithEmailAndPassword(
                    data.email,
                    data.password,
                );

                await firestore().collection('users').add({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    uid: userCredential.user?.uid,
                });

                const idToken = await userCredential.user.getIdToken();
                setTokenAction(idToken || '');

            } catch (error) {
                console.error('Error creating user: ', error);
            }

        },
    });

    return {
        ...mutation,
    };
};
