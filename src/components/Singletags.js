import React from 'react';
import { Badge } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { tagRemoved, tagSelected } from '../features/filter/filterSlice';

const Singletags = ({ title }) => {
    const dispatch = useDispatch();
    const { tags: selectedTags } = useSelector((state) => state.filter);

    const isSelected = selectedTags.includes(title);
    const handleSelect = () => {
        if (isSelected) {
            dispatch(tagRemoved(title));
        } else {
            dispatch(tagSelected(title));
        }
    };

    return (
        <Badge
            bg={isSelected ? "success" : "primary"}
            style={{ cursor: "pointer" }}
            onClick={handleSelect}
        >
            {title}
        </Badge>
    );
};

export default Singletags;
