import React from 'react';
import {connect} from 'react-redux';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import {createStructuredSelector} from "reselect/lib/index";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors";


const CollectionOverview = ({collections}) => {
    return (
        <div className='shop-page'>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    );
};

const MapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(MapStateToProps)(CollectionOverview)