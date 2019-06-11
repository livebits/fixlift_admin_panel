import React from 'react';
import Chip from '@material-ui/core/Chip';
import { translate } from 'react-admin';

const styles = {
    main: { display: 'flex', flexWrap: 'wrap' },
    chip: { margin: 4 },
};

const RolesField = ({ record, translate }) => (
    <span style={styles.main}>
        {record.roles &&
            record.roles.map(role => (
                <Chip
                    key={role}
                    style={styles.chip}
                    label={role.title}
                />
            ))}
    </span>
);

const TranslatedRolesField = translate(RolesField);

TranslatedRolesField.defaultProps = {
    addLabel: true,
    source: 'groups',
};

export default TranslatedRolesField;
