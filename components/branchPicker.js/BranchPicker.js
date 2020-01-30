import React from 'react';
import { View, Picker } from 'react-native';
import branchPickerStyles from './BranchPicker.styles';
import { useSelector, useDispatch } from 'react-redux';
import { searchBranch } from '../../store/actions/searchActions';

export default function BranchPicker() {
    const selectedBranch = useSelector(state => state.search.branch);
    const branches = useSelector(state => state.branches);

    const dispatch = useDispatch();

    const items = () => {
        return branches.branches.map((branch, index) => {
            return (
                <Picker.Item
                    label={branch.name}
                    value={branch.name}
                    key={index}
                />
            );
        });
    };

    const onItemClick = value => {
        console.log('value: ', value);
        dispatch(searchBranch(value));
    };

    return (
        <View style={branchPickerStyles.container}>
            <Picker
                selectedValue={selectedBranch}
                onValueChange={value => onItemClick(value)}>
                {items()}
            </Picker>
        </View>
    );
}
