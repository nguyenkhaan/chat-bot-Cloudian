# 🌧️AI Chatbot CLOUDIAN 🌧️ ☁️ 

## 🤖 Giới thiệu
Chatbot AI này được xây dựng bằng JS, (với React - Redux là các công nghệ hỗ trợ). 

Ứng dụng sử dụng Gemini API để cung cấp khả năng trả lời tự động cho các câu hỏi và cung cấp các tính năng tương tác với người dùng như tìm kiếm trên Google và hiển thị emoji.

**Link API**: 🔗 https://ai.google.dev/
## 🤖 Công nghệ sử dụng
- **Frontend**: HTML, CSS, JavaScript
  - **React**: Được sử dụng để xây dựng giao diện người dùng (UI), giúp việc tạo và quản lý các component dễ dàng hơn.
  - **Redux**: Quản lý trạng thái của ứng dụng, giúp duy trì và đồng bộ hóa dữ liệu giữa các component.
- **API**:
  - **Gemini API**: Được sử dụng để trả lời các câu hỏi tự động của người dùng.
  - **Embeed**: Tích hợp tính năng tìm kiếm thông tin từ Google trực tiếp trong ứng dụng.

## 🤖 Tính năng
- **Hiển thị thông tin cuộc trò chuyện**:
  - Dùng React để tạo và render các component.
  - Redux được sử dụng để quản lý các trạng thái của các tin nhắn trong cuộc trò chuyện.
  
- **Trả lời câu hỏi**:
  - Khi người dùng nhập câu hỏi, ứng dụng sẽ gọi API để xử lý và trả về câu trả lời tự động.
  - Câu hỏi có thể được nhập dưới dạng văn bản trong `textarea` hoặc qua URL của hình ảnh. Hình ảnh sẽ được gửi dưới dạng URL để API xử lý và trả về câu trả lời tương ứng.

- **Hiển thị emoji**:
  - Ứng dụng hỗ trợ hiển thị emoji trong cuộc trò chuyện, người dùng có thể gửi và nhận emoji.

- **Tìm kiếm trên Google**:
  - Ứng dụng cung cấp tính năng tìm kiếm trên Google thông qua việc sử dụng tính năng `window.open` của JavaScript ES6.
  - Khi người dùng nhập từ khóa tìm kiếm, một cửa sổ mới sẽ mở ra và hiển thị kết quả tìm kiếm từ Google.

## 🤖 Cách thức hoạt động

1. **Hiển thị thông tin cuộc trò chuyện**:
   - Các component React sẽ được sử dụng để tạo và render các phần tử của cuộc trò chuyện.
   - Redux giúp quản lý các trạng thái của các tin nhắn trong cuộc trò chuyện.
   - Mỗi khi có tin nhắn mới từ người dùng hoặc chatbot, Redux sẽ cập nhật và gửi dữ liệu này đến component để hiển thị.

2. **Trả lời câu hỏi**:
   - Khi người dùng nhập câu hỏi vào `textarea`, ứng dụng sẽ lấy giá trị `textarea.value` và gửi nó đến API (Gemini API) để xử lý.
   - Nếu người dùng gửi hình ảnh, URL của hình ảnh sẽ được gửi đến API để phân tích và trả lời câu hỏi.
   - Kết quả trả về từ API sẽ được hiển thị trên màn hình trong cuộc trò chuyện.

3. **Hiển thị emoji**:
   - Người dùng có thể chọn emoji từ danh sách có sẵn và gửi emoji trong cuộc trò chuyện.
   - Các emoji sẽ được hiển thị dưới dạng biểu tượng trong phần chat.
   - 🔗 **Link Github Emoji**: https://github.com/nolanlawson/emoji-picker-element

4. **Tính năng Tìm kiếm Google**:
   - Ứng dụng cung cấp tính năng tìm kiếm trên Google thông qua việc sử dụng tính năng `window.open` của JavaScript ES6.
   - Khi người dùng nhập từ khóa tìm kiếm, một cửa sổ mới sẽ mở ra và hiển thị kết quả tìm kiếm từ Google.

## 🤖 Cài đặt

### Yêu cầu

### Hướng dẫn cài đặt
1. **Clone repository**:
   ```bash
   git clone https://github.com/username/ai-chatbot.git
   cd ai-chatbot

## Bản quyền

Copyright © 2025 by Kha An. All rights reserved.

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
