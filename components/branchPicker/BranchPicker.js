import React from 'react';
import { View, Picker } from 'react-native';
import branchPickerStyles from './BranchPicker.styles';
import { useSelector, useDispatch } from 'react-redux';
import { searchBranch } from '../../store/actions/searchActions';
import { fetchCommits } from '../../store/actions/commitsActions';
import { parseCommitsurl } from '../../utils/parseCommitsUrl';

export default function BranchPicker() {
    const search = useSelector(state => state.search);
    const branches = useSelector(state => state.branches);

    const dispatch = useDispatch();

    const items = () => {
        return branches.branches.map((branch, index) => {
            return <Picker.Item label={branch.name} value={branch.name} key={index} />;
        });
    };

    const onItemClick = value => {
        dispatch(searchBranch(value));
        let url = parseCommitsurl(search.commitsUrl, value, 1);
        dispatch(fetchCommits(url));
    };

    return (
        <View style={branchPickerStyles.container}>
            <Picker selectedValue={search.branch} onValueChange={value => onItemClick(value)}>
                {items()}
            </Picker>
        </View>
    );
}
