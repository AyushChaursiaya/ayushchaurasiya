import { Box, Input } from '@mui/material';
import React from 'react';

function PersonalInfo({ formData, handleChange, errors }) {
    return (
        <Box>
            <br />
            <h4>Step 1: Personal Information</h4>
            <br />
            <Box sx={{ marginBottom: 2 }}>
                <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </Box>

            <Box sx={{ marginBottom: 2 }}>
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </Box>

            <Box sx={{ marginBottom: 2 }}>
                <Input
                    type="number"
                    name="phone"
                    placeholder="Phone"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    value={formData.phone}
                    onChange={handleChange}
                />
                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </Box>
        </Box>
    );
}

export default PersonalInfo;