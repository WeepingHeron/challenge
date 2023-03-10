import styled from "styled-components";

function Header() {
    return (
        <StContainer>
            <div>My Todo List</div>
            <div>React</div>
        </StContainer>
    );
};
export default Header;

const StContainer = styled.div`
    border: 1px solid #ddd;
    height: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 24px;
    margin-top: 10px;
`;