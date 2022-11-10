import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_LINK_MUTATION = gql`
	mutation PostMutation($description: String!, $url: String!) {
		post(description: $description, url: $url) {
			id
			createdAt
			url
			description
		}
	}
`;

const CreateLink = () => {
	const [formState, setFormState] = useState({
		description: "",
		url: "",
	});

	const [createLink] = useMutation(CREATE_LINK_MUTATION, {
		variables: { description: formState.description, url: formState.url },
	});

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					createLink();
				}}>
				<div className="flex flex-col mt-3">
					<input
						className="mb-2 border"
						type="text"
						placeholder="A description for the link"
						value={formState.description}
						onChange={(e) =>
							setFormState({
								...formState,
								description: e.target.value,
							})
						}
					/>
					<input
						className="mb-2 border"
						type="text"
						placeholder="A URL for the link"
						value={formState.url}
						onChange={(e) =>
							setFormState({
								...formState,
								url: e.target.value,
							})
						}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default CreateLink;
