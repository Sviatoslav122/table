import React from 'react';
import { useDispatch } from 'react-redux';
import { setRole } from '../../store/slices/authSlice';

const RoleSelect: React.FC = () => {
    const dispatch = useDispatch();

    const handleRoleChange = (role: string) => {
        dispatch(setRole(role));
    };

    return (
        <div>
            <label>
                <input
                    type="radio"
                    value="admin"
                    onChange={() => handleRoleChange('admin')}
                />
                Admin
            </label>
            <label>
                <input
                    type="radio"
                    value="manager"
                    onChange={() => handleRoleChange('manager')}
                />
                Manager
            </label>
        </div>
    );
};

export default RoleSelect;