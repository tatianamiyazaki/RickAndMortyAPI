import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    background: #000;
`;

export const Form = styled.View`
    flex-direction: row;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor:'#999'
})`
    flex: 1;
    height: 40px;
    background: #eee;
    border-radius: 4px;
    padding: 0 15px;
    border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    background: #3498db;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 12px;
    opacity: ${props => props.loading ? 0.7 : 1};
`;

export const List = styled.FlatList`
    margin-top: 20px;
`;

export const Card = styled.View`
    align-items: center;
    margin: 0 20px 30px;
    background: #000,
`;

export const Avatar = styled.Image`
    width:200px;
    height: 200px;
    border-radius: 8px;
    background: #eee;
`;

export const Name = styled.Text`
    font-size: 20px;
    color: red;
    font-weight: bold;
    margin-top: 4px;
    text-align: center;
`;

export const Status = styled.Text`
    font-size: 16px;
    line-height: 18px;
    color: white;
    margin-top: 5px;
    text-align: center;
`;

export const Location = styled.Text`
    font-size: 16px;
    line-height: 18px;
    color: white;
    margin-top: 5px;
    text-align: center;
`;

export const Episode = styled.Text`
    font-size: 16px;
    line-height: 18px;
    color: white;
    margin-top: 5px;
    text-align: center;
`;

export const Created = styled.Text`
    font-size: 16px;
    line-height: 18px;
    color: white;
    margin-top: 5px;
    text-align: center;
`;


export const Gender = styled.Text`
    font-size: 16px;
    line-height: 18px;
    color: white;
    margin-top: 5px;
    text-align: center;
`;


export const ProfileButton = styled(RectButton)`
    margin-top: 10px;
    align-self: stretch;
    border-radius: 5px;
    background: #13B510;
    justify-content: center;
    align-items: center;
    height: 36px;
`;

export const ProfileButtonText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
`;


export const Header = styled.View`
    padding-top: 30px;
    align-items: center;
    justify-content: center;
`;

export const Detalhes = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
`;

export const ExtraInfo = styled.View`
    background: #fff;
    border-radius: 4px;
    padding: 10px 15px;
    margin-bottom: 20px;
    flex-direction: row;
    align-items: center;
`;

export const Info = styled.View`
    margin-left: 10px;
    flex: 1;
`;

export const Species = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: white;
    margin-top: 4px;
    text-align: center;
`;

