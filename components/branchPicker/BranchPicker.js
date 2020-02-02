import React from 'react';
import { View, Picker } from 'react-native';
import BranchPickerStyles from './BranchPicker.styles';
import { useSelector, useDispatch } from './node_modules/react-redux';
import { searchBranch } from '../../store/actions/searchActions';
import { fetchCommits } from '../../store/actions/commitsActions';
import { parseCommitsurl } from '../../utils/parseCommitsUrl';

/**
 * Branch Picker Component
 *
 * Provides picker component to select branch
 * Dispatches selected branch including commits to redux store
 *
 */
export default function BranchPicker() {
    const search = useSelector(state => state.search);
    const branches = useSelector(state => state.branches);

    const dispatch = useDispatch();

    /**
     *  Map branches to picker items
     *
     * @returns branch picker items
     */
    const branchItems = () => {
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

    /**
     * Dispatch selected branch including commits
     *
     * @param {*} branch branch name
     */
    const branchClicked = branch => {
        dispatch(searchBranch(branch));
        let url = parseCommitsurl(search.commitsUrl, branch, 1);
        dispatch(fetchCommits(url));
    };

    return (
        <View style={BranchPickerStyles.container}>
            <Picker
                selectedValue={search.branch}
                onValueChange={branch => branchClicked(branch)}>
                {branchItems()}
            </Picker>
        </View>
    );
}
