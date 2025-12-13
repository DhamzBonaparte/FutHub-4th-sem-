import axios from "axios";
import { useEffect, useState } from "react";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import InfoIcon from "@mui/icons-material/Info";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function Futsal() {
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [owner, setOwner] = useState("");
  const [futsal, setFutsal] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [artificialTurf, setArtificialTurf] = useState(false);
  const [floodlights, setFloodlights] = useState(false);
  const [changingRooms, setChangingRooms] = useState(false);
  const [showers, setShowers] = useState(false);
  const [parking, setParking] = useState(false);
  const [cafeteria, setCafeteria] = useState(false);
  const [firstAid, setFirstAid] = useState(false);
  const [equipmentRental, setEquipmentRental] = useState(false);
  const [price, setPrice] = useState("");
  const [capacity, setCapacity] = useState("");
  const [about, setAbout] = useState("");
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    getFutsal();
  }, []);
  const [venue, setVenue] = useState({});

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setImages(previews);
  };

  console.log(venue?.images?.map((img, index) => img));

  const getFutsal = async () => {
    setLoading(true);
    try {
      const check = await axios.get(
        "http://localhost:3000/api/v1/owner/check-owner",
        { withCredentials: true }
      );
      setVenue(check.data.data);
      console.log(check);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="load"
        style={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: "30px",
          display: loading ? "block" : "none",
        }}
      >
        Loading Details...
      </div>
      <div
        style={{
          maxWidth: "800px",
          margin: "40px auto",
          padding: "30px",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          display: edit ? "block" : "none",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
            color: "#007bff",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Edit Venue Details
        </h2>

        <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <input
            type="text"
            placeholder="Owner Name"
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
            defaultValue={
              venue?.owner
                ? venue.owner.charAt(0).toUpperCase() + venue.owner.slice(1)
                : ""
            }
            onChange={(e) => setOwner(e.target.value)}
          />
          <input
            type="text"
            placeholder="Futsal Name"
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
            defaultValue={
              venue?.futsal
                ? venue.futsal.charAt(0).toUpperCase() + venue.futsal.slice(1)
                : ""
            }
            onChange={(e) => setFutsal(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
            defaultValue={
              venue?.location
                ? venue.location.charAt(0).toUpperCase() +
                  venue.location.slice(1)
                : ""
            }
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
            defaultValue={venue?.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Contact Number"
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
            defaultValue={venue?.contact ? venue.contact : ""}
            onChange={(e) => setContact(e.target.value)}
            minLength={10}
            maxLength={10}
            pattern="\d{10}"
            required
          />

          <input
            type="text"
            placeholder="Address"
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
            value={
              venue?.address
                ? venue?.address?.split(" ")[0].slice(0, 1).toUpperCase() +
                  venue?.address?.slice(1)
                : ""
            }
            onChange={(e) => setAddress(e.target.value)}
          />

          {/* Facilities checkboxes */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <label
              style={{
                display: "flex",
                gap: "6px",
                background: "#f0f8ff",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "13px",
                fontWeight: 500,
                color: "#007bff",
              }}
            >
              <input
                type="checkbox"
                value="artificial_turf"
                checked={venue?.artificialTurf}
                onChange={(e) => setArtificialTurf(e.target.value)}
              />{" "}
              Artificial Turf
            </label>
            <label
              style={{
                display: "flex",
                gap: "6px",
                background: "#f0f8ff",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "13px",
                fontWeight: 500,
                color: "#007bff",
              }}
            >
              <input
                type="checkbox"
                value="floodlights"
                checked={venue?.floodlights}
                onChange={(e) => setFloodlights(e.target.value)}
              />{" "}
              Floodlights
            </label>
            <label
              style={{
                display: "flex",
                gap: "6px",
                background: "#f0f8ff",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "13px",
                fontWeight: 500,
                color: "#007bff",
              }}
            >
              <input
                type="checkbox"
                value="changing_rooms"
                checked={venue?.changingRooms}
                onChange={(e) => setChangingRooms(e.target.value)}
              />{" "}
              Changing Rooms
            </label>
            <label
              style={{
                display: "flex",
                gap: "6px",
                background: "#f0f8ff",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "13px",
                fontWeight: 500,
                color: "#007bff",
              }}
            >
              <input
                type="checkbox"
                onChange={(e) => setShowers(e.target.value)}
                value="showers"
                checked={venue?.showers}
              />{" "}
              Showers
            </label>
            <label
              style={{
                display: "flex",
                gap: "6px",
                background: "#f0f8ff",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "13px",
                fontWeight: 500,
                color: "#007bff",
              }}
            >
              <input
                type="checkbox"
                value="parking"
                onChange={(e) => setParking(e.target.value)}
                checked={venue?.parking}
              />{" "}
              Parking
            </label>
            <label
              style={{
                display: "flex",
                gap: "6px",
                background: "#f0f8ff",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "13px",
                fontWeight: 500,
                color: "#007bff",
              }}
            >
              <input
                type="checkbox"
                onChange={(e) => setCafeteria(e.target.value)}
                value="cafeteria"
                checked={venue?.cafeteria}
              />{" "}
              Cafeteria
            </label>
            <label
              style={{
                display: "flex",
                gap: "6px",
                background: "#f0f8ff",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "13px",
                fontWeight: 500,
                color: "#007bff",
              }}
            >
              <input
                type="checkbox"
                value="first_aid"
                checked={venue?.firstAid}
                onChange={(e) => setFirstAid(e.target.value)}
              />{" "}
              First Aid
            </label>
            <label
              style={{
                display: "flex",
                gap: "6px",
                background: "#f0f8ff",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "13px",
                fontWeight: 500,
                color: "#007bff",
              }}
            >
              <input
                type="checkbox"
                onChange={(e) => setEquipmentRental(e.target.value)}
                value="equipment_rental"
                checked={venue?.equipmentRental}
              />{" "}
              Equipment Rental
            </label>
          </div>

          <input
            type="text"
            placeholder="Price"
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
            defaultValue={venue?.price ? venue?.price : ""}
            onChange={(e) => setPrice(e.target.value)}
          />
          <select
            onChange={(e) => setCapacity(e.target.value)}
            id="capacity"
            style={{
              width: "100%",
              padding: "0.8rem 1rem",
              border: "1px solid #ddd",
              borderRadius: "5px",
              fontSize: "1rem",
              transition: "var(--transition)",
            }}
            required
            value={venue?.capacity ? venue?.capacity : ""}
          >
            <option value="">Select Capacity</option>
            <option value="5">5-a-side</option>
            <option value="7">7-a-side</option>
            <option value="11">11-a-side</option>
          </select>

          <label>Futsal Photos (Upload at least 3 photos) *</label>
          <div
            className="photo-upload"
            style={{
              border: "2px dashed #ddd",
              borderRadius: "5px",
              padding: "1.5rem",
              textAlign: "center",
              cursor: "pointer",
              transition: "var(--transition)",
            }}
            onClick={() => document.getElementById("photoInput").click()}
          >
            <CloudUploadIcon style={{ fontSize: "3rem" }} />
            <p>Click to upload futsal photos</p>

            <input
              type="file"
              id="photoInput"
              multiple
              name="futsalPic"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => {
                handleImageChange(e);
                setPreview(true);
              }}
            />

            {/* Preview section */}
            <div
              style={{
                display: !preview ? "grid" : "none",
                gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
                gap: "0.5rem",
                marginTop: "1rem",
              }}
            >
              {/* images */}
              {venue?.images?.map((img, index) => (
                <img
                  key={index}
                  src={`http://localhost:3000${img}`}
                  alt={`preview-${index}`}
                  style={{
                    width: "100%",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
              ))}
            </div>
            <div
              style={{
                display: preview ? "grid" : "none",
                gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
                gap: "0.5rem",
                marginTop: "1rem",
              }}
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  alt={`preview-${index}`}
                  style={{
                    width: "100%",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
              ))}
            </div>
          </div>
          <textarea
            placeholder="About the venue"
            rows="4"
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              resize: "none",
            }}
            defaultValue={venue?.about ? venue?.about : ""}
            onChange={(e) => setAbout(e.target.value)}
          />

          <button
            type="submit"
            style={{
              background: "#23b319ff",
              color: "#fff",
              padding: "12px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: 600,
              marginTop: "10px",
            }}
          >
            Save Changes
          </button>
          <button
            style={{
              background: "#ff1900ff",
              color: "#fff",
              padding: "12px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: 600,
              marginTop: "10px",
            }}
            onClick={() => setEdit(false)}
          >
            Cancel
          </button>
        </form>
      </div>

      <div
        id="myVenues"
        className="venues-section"
        style={{
          padding: "40px",
          background: "linear-gradient(135deg, #f9f9f9, #eef2f7)",
          minHeight: "100vh",
          fontFamily: '"Segoe UI", sans-serif',
          display: loading || edit ? "none" : "block",
        }}
      >
        <div
          className="section-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "25px",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#333",
            }}
          >
            My Venues
          </h2>
        </div>

        <div
          className="venues-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "25px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              background: "#fdfdfd",
              borderRadius: "14px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              overflow: "hidden",
              marginBottom: "25px",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-4px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            {/* Left side: image */}
            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                background: "#fafafa",
                padding: "8px",
              }}
            >
              {venue?.images?.slice(0, 1).map((fut, idx) => {
                return (
                  <img
                    key={idx}
                    src={`http://localhost:3000${venue.images.slice(0, 1)}`}
                    alt={venue?.futsal}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                    }}
                  />
                );
              })}
            </div>

            {/* Right side: details */}
            <div
              style={{
                flex: "2",
                height: "100%",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#555",
                    margin: "6px 0",
                    textAlign: "center",
                  }}
                >
                  <i
                    className="fas fa-tag"
                    style={{ color: "#28a745", marginRight: "6px" }}
                  ></i>
                  Futsal Id: {venue?._id}
                </p>
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    marginBottom: "10px",
                    color: "#1a1a1a",
                  }}
                >
                  {venue?.futsal?.split(" ")[0].slice(0, 1).toUpperCase() +
                    venue?.futsal?.slice(1)}
                </h3>

                <p style={{ fontSize: "15px", color: "#555", margin: "6px 0" }}>
                  <LocationPinIcon
                    className="fas fa-map-marker-alt"
                    style={{ color: "var(--dark-green)", marginRight: "6px" }}
                  ></LocationPinIcon>
                  {venue?.location?.slice(0, 1).toUpperCase() +
                    venue?.location?.slice(1)}
                </p>
                <p style={{ fontSize: "15px", color: "#555", margin: "6px 0" }}>
                  <AccountBalanceWalletIcon
                    className="fas fa-tag"
                    style={{ color: "var(--dark-green)", marginRight: "6px" }}
                  ></AccountBalanceWalletIcon>
                  NPR {venue?.price}/hour • {venue?.capacity}-a-side
                </p>

                {/* Facilities as badges */}
                {/* Facilities badges */}
                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      background: "#e9f5ff",
                      color: "#007bff",
                      padding: "4px 10px",
                      borderRadius: "20px",
                      fontSize: "13px",
                      fontWeight: 500,
                      display: venue?.artificialTurf ? "inline-block" : "none",
                    }}
                  >
                    {venue?.artificialTurf ? "Artificial Turf" : ""}
                  </span>

                  <span
                    style={{
                      background: "#e9f5ff",
                      color: "#007bff",
                      padding: "4px 10px",
                      borderRadius: "20px",
                      fontSize: "13px",
                      fontWeight: 500,
                      display: venue?.floodlights ? "inline-block" : "none",
                    }}
                  >
                    {venue?.floodlights ? "Floodlights" : ""}
                  </span>

                  <span
                    style={{
                      background: "#e9f5ff",
                      color: "#007bff",
                      padding: "4px 10px",
                      borderRadius: "20px",
                      fontSize: "13px",
                      fontWeight: 500,
                      display: venue?.changingRooms ? "inline-block" : "none",
                    }}
                  >
                    {venue?.changingRooms ? "Changing Rooms" : ""}
                  </span>

                  <span
                    style={{
                      background: "#e9f5ff",
                      color: "#007bff",
                      padding: "4px 10px",
                      borderRadius: "20px",
                      fontSize: "13px",
                      fontWeight: 500,
                      display: venue?.showers ? "inline-block" : "none",
                    }}
                  >
                    {venue?.showers ? "Showers" : ""}
                  </span>

                  <span
                    style={{
                      background: "#e9f5ff",
                      color: "#007bff",
                      padding: "4px 10px",
                      borderRadius: "20px",
                      fontSize: "13px",
                      fontWeight: 500,
                      display: venue?.parking ? "inline-block" : "none",
                    }}
                  >
                    {venue?.parking ? "Parking" : ""}
                  </span>

                  <span
                    style={{
                      background: "#e9f5ff",
                      color: "#007bff",
                      padding: "4px 10px",
                      borderRadius: "20px",
                      fontSize: "13px",
                      fontWeight: 500,
                      display: venue?.cafeteria ? "inline-block" : "none",
                    }}
                  >
                    {venue?.cafeteria ? "Cafeteria" : ""}
                  </span>

                  <span
                    style={{
                      background: "#e9f5ff",
                      color: "#007bff",
                      padding: "4px 10px",
                      borderRadius: "20px",
                      fontSize: "13px",
                      fontWeight: 500,
                      display: venue?.firstAid ? "inline-block" : "none",
                    }}
                  >
                    {venue?.firstAid ? "First Aid" : ""}
                  </span>

                  <span
                    style={{
                      background: "#e9f5ff",
                      color: "#007bff",
                      padding: "4px 10px",
                      borderRadius: "20px",
                      fontSize: "13px",
                      fontWeight: 500,
                      display: venue?.equipmentRental ? "inline-block" : "none",
                    }}
                  >
                    {venue?.equipmentRental ? "Equipment Rental" : ""}
                  </span>
                </div>
              </div>

              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  gap: "8px",
                  flexWrap: "wrap",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    color: "#333",
                    margin: "6px 0",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "#bcc3d3ff",
                    padding: "6px 10px",
                    borderRadius: "6px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                    fontWeight: 500,
                  }}
                >
                  {venue?.email}
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#333",
                    margin: "6px 0",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "#bcc3d3ff",
                    padding: "6px 10px",
                    borderRadius: "6px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                    fontWeight: 500,
                  }}
                >
                  {venue?.contact}
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#333",
                    margin: "6px 0",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "#bcc3d3ff",
                    padding: "6px 10px",
                    borderRadius: "6px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                    fontWeight: 500,
                  }}
                >
                  {venue?.address?.slice(0, 1).toUpperCase() +
                    venue?.address?.slice(1)}
                </p>
              </div>

              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  gap: "8px",
                  flexWrap: "wrap",
                }}
              >
                <InfoIcon style={{ color: "#415245ff", marginRight: "6px" }} />
                {venue?.about?.slice(0, 1).toUpperCase() +
                  venue?.about?.slice(1)}
              </div>
              {/* Action button */}
              <button
                style={{
                  background: "#007bff",
                  color: "#fff",
                  border: "none",
                  padding: "10px 18px",
                  borderRadius: "6px",
                  fontSize: "15px",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "background 0.3s ease",
                  marginTop: "20px",
                }}
                onClick={() => setEdit(true)}
              >
                Edit Futsal Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
